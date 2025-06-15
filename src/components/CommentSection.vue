<template>
  <div class="comment-section">
    <h3 class="comment-title">
      💬 Comments
      <span class="comment-count" v-if="comments.length > 0">({{ comments.length }})</span>
    </h3>

    <!-- Comment Form -->
    <form @submit.prevent="submitComment" class="comment-form">
      <div class="form-grid">
        <!-- Name Input -->
        <input
          v-model="form.name"
          type="text"
          placeholder="Your name"
          required
          class="form-input"
        />

        <!-- Email Input -->
        <input
          v-model="form.email"
          type="email"
          placeholder="Your email"
          required
          class="form-input"
        />

        <!-- Comment Textarea -->
        <textarea
          v-model="form.text"
          placeholder="Share your thoughts about this movie..."
          required
          rows="3"
          class="form-textarea"
        ></textarea>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="loading"
          class="submit-btn"
        >
          <span v-if="!loading">
            ✨ Add Comment
          </span>
          <span v-else class="loading-text">
            <span class="spinner"></span>
            Posting...
          </span>
        </button>
      </div>
    </form>

    <!-- Comment List -->
    <div class="comments-list" v-if="comments.length > 0">
      <div
        v-for="comment in comments"
        :key="comment._id"
        class="comment-item"
      >
        <div class="comment-header">
          <div class="user-info">
            <div class="user-avatar">
              {{ comment.name.charAt(0).toUpperCase() }}
            </div>
            <span class="user-name">{{ comment.name }}</span>
          </div>
          <span class="comment-date">{{ formatDate(comment.date) }}</span>
        </div>
        <p class="comment-text">{{ comment.text }}</p>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-state">
      <div class="empty-icon">🎬</div>
      <p class="empty-text">No comments yet. Be the first to comment!</p>
    </div>
  </div>
</template>

<style scoped>
.comment-section {
  margin-top: 2.5rem;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.comment-title {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.comment-count {
  color: #a855f7;
  font-size: 1rem;
  font-weight: 500;
}

.comment-form {
  margin-bottom: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .form-textarea {
    grid-column: 1 / -1;
  }
  
  .submit-btn {
    grid-column: 1 / -1;
  }
}

.form-input,
.form-textarea {
  background: #1a1a1a;
  color: #ffffff;
  border: 1px solid #4b5563;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #9ca3af;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 4rem;
  font-family: inherit;
  line-height: 1.5;
}

.submit-btn {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #6d28d9 0%, #9333ea 100%);
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.comment-item {
  background: #1a1a1a;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.2s ease;
}

.comment-item:hover {
  border-color: #6b7280;
  transform: translateY(-1px);
}

.comment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-avatar {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
}

.user-name {
  color: #a855f7;
  font-weight: 600;
  font-size: 1rem;
}

.comment-date {
  color: #9ca3af;
  font-size: 0.75rem;
}

.comment-text {
  color: #e5e7eb;
  line-height: 1.6;
  margin: 0;
  font-size: 0.875rem;
}

.empty-state {
  text-align: center;
  padding: 2rem 1rem;
  color: #9ca3af;
}

.empty-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}

.empty-text {
  font-size: 0.875rem;
  font-style: italic;
  margin: 0;
}

/* Mobile responsiveness */
@media (max-width: 767px) {
  .comment-section {
    padding: 1.25rem;
    margin-top: 2rem;
  }
  
  .comment-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .user-info {
    width: 100%;
  }
  
  .comment-date {
    align-self: flex-start;
  }
}
</style>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { fetchComments, addComment } from '../services/api';

const props = defineProps({ movieId: String });

const comments = ref([]);
const form = ref({ name: '', email: '', text: '' });
const loading = ref(false);

const loadComments = async () => {
  try {
    const res = await fetchComments(props.movieId);
    comments.value = res.data;
  } catch (error) {
    console.error('Failed to load comments:', error);
  }
};

const submitComment = async () => {
  try {
    loading.value = true;
    await addComment(props.movieId, form.value);
    form.value = { name: '', email: '', text: '' };
    await loadComments();
  } catch (error) {
    console.error('Error submitting comment:', error);
  } finally {
    loading.value = false;
  }
};

const formatDate = (date) =>
  new Date(date).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

onMounted(loadComments);
watch(() => props.movieId, loadComments);
</script>